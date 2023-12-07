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
export type GiPlanksProps = typeof __propDef.props;
export type GiPlanksEvents = typeof __propDef.events;
export type GiPlanksSlots = typeof __propDef.slots;
export default class GiPlanks extends SvelteComponentTyped<GiPlanksProps, GiPlanksEvents, GiPlanksSlots> {
}
export {};
