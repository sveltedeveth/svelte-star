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
export type GiNeedleJawsProps = typeof __propDef.props;
export type GiNeedleJawsEvents = typeof __propDef.events;
export type GiNeedleJawsSlots = typeof __propDef.slots;
export default class GiNeedleJaws extends SvelteComponentTyped<GiNeedleJawsProps, GiNeedleJawsEvents, GiNeedleJawsSlots> {
}
export {};
