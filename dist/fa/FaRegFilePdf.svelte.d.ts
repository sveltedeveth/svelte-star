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
export type FaRegFilePdfProps = typeof __propDef.props;
export type FaRegFilePdfEvents = typeof __propDef.events;
export type FaRegFilePdfSlots = typeof __propDef.slots;
export default class FaRegFilePdf extends SvelteComponentTyped<FaRegFilePdfProps, FaRegFilePdfEvents, FaRegFilePdfSlots> {
}
export {};
