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
export type FaToiletPaperProps = typeof __propDef.props;
export type FaToiletPaperEvents = typeof __propDef.events;
export type FaToiletPaperSlots = typeof __propDef.slots;
export default class FaToiletPaper extends SvelteComponentTyped<FaToiletPaperProps, FaToiletPaperEvents, FaToiletPaperSlots> {
}
export {};
