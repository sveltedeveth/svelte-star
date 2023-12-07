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
export type FaCodeProps = typeof __propDef.props;
export type FaCodeEvents = typeof __propDef.events;
export type FaCodeSlots = typeof __propDef.slots;
export default class FaCode extends SvelteComponentTyped<FaCodeProps, FaCodeEvents, FaCodeSlots> {
}
export {};
