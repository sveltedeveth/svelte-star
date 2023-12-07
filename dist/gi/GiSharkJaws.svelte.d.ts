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
export type GiSharkJawsProps = typeof __propDef.props;
export type GiSharkJawsEvents = typeof __propDef.events;
export type GiSharkJawsSlots = typeof __propDef.slots;
export default class GiSharkJaws extends SvelteComponentTyped<GiSharkJawsProps, GiSharkJawsEvents, GiSharkJawsSlots> {
}
export {};
