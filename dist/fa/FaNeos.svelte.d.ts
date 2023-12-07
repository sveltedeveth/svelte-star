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
export type FaNeosProps = typeof __propDef.props;
export type FaNeosEvents = typeof __propDef.events;
export type FaNeosSlots = typeof __propDef.slots;
export default class FaNeos extends SvelteComponentTyped<FaNeosProps, FaNeosEvents, FaNeosSlots> {
}
export {};
