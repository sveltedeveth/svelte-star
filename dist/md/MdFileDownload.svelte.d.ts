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
export type MdFileDownloadProps = typeof __propDef.props;
export type MdFileDownloadEvents = typeof __propDef.events;
export type MdFileDownloadSlots = typeof __propDef.slots;
export default class MdFileDownload extends SvelteComponentTyped<MdFileDownloadProps, MdFileDownloadEvents, MdFileDownloadSlots> {
}
export {};
