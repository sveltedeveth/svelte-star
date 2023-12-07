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
export type GiGoblinHeadProps = typeof __propDef.props;
export type GiGoblinHeadEvents = typeof __propDef.events;
export type GiGoblinHeadSlots = typeof __propDef.slots;
export default class GiGoblinHead extends SvelteComponentTyped<GiGoblinHeadProps, GiGoblinHeadEvents, GiGoblinHeadSlots> {
}
export {};
