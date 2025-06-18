import { it, expect, vi, beforeEach } from 'vitest';
import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import { showError } from "./dom";

let document;

beforeEach(() => {
    const htmlDocPath = path.join(process.cwd(), 'index.html');
    const htmlDocumentContent = fs.readFileSync(htmlDocPath, 'utf-8');

    const dom = new JSDOM(htmlDocumentContent, { runScripts: 'dangerously' });
    document = dom.window.document;

    // Stub the global document for your module to use
    vi.stubGlobal('document', document);
});

it('should add an error paragraph to the id="errors" element', () => {
    showError('Test');

    const errorEl = document.getElementById('errors');
    const errorsParagraph = errorEl.firstElementChild;

    expect(errorsParagraph).not.toBeNull();
    expect(errorsParagraph.textContent).toContain('Test');
});

it('should not contain an error paragraph initially', () => {
    const errorEl = document.getElementById('errors');
    const errorsParagraph = errorEl.firstElementChild;

    expect(errorsParagraph).toBeNull();
});

it('should output the provided message in the error paragraph', () => {
    const testErrorMessage = 'Test';
    showError(testErrorMessage);

    const errorEl = document.getElementById('errors');
    const errorsParagraph = errorEl.firstElementChild;

    expect(errorsParagraph.textContent).toBe(testErrorMessage);
});