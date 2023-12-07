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
export type FaFileDownloadProps = typeof __propDef.props;
export type FaFileDownloadEvents = typeof __propDef.events;
export type FaFileDownloadSlots = typeof __propDef.slots;
export default class FaFileDownload extends SvelteComponentTyped<FaFileDownloadProps, FaFileDownloadEvents, FaFileDownloadSlots> {
}
export {};
