import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdFontDownloadProps = typeof __propDef.props;
export type MdFontDownloadEvents = typeof __propDef.events;
export type MdFontDownloadSlots = typeof __propDef.slots;
export default class MdFontDownload extends SvelteComponentTyped<MdFontDownloadProps, MdFontDownloadEvents, MdFontDownloadSlots> {
}
export {};
