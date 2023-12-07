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
export type IoMdDownloadProps = typeof __propDef.props;
export type IoMdDownloadEvents = typeof __propDef.events;
export type IoMdDownloadSlots = typeof __propDef.slots;
export default class IoMdDownload extends SvelteComponentTyped<IoMdDownloadProps, IoMdDownloadEvents, IoMdDownloadSlots> {
}
export {};
