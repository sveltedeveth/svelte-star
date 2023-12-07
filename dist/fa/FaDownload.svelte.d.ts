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
export type FaDownloadProps = typeof __propDef.props;
export type FaDownloadEvents = typeof __propDef.events;
export type FaDownloadSlots = typeof __propDef.slots;
export default class FaDownload extends SvelteComponentTyped<FaDownloadProps, FaDownloadEvents, FaDownloadSlots> {
}
export {};
