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
export type FaFilePdfProps = typeof __propDef.props;
export type FaFilePdfEvents = typeof __propDef.events;
export type FaFilePdfSlots = typeof __propDef.slots;
export default class FaFilePdf extends SvelteComponentTyped<FaFilePdfProps, FaFilePdfEvents, FaFilePdfSlots> {
}
export {};
