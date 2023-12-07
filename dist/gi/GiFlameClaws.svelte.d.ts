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
export type GiFlameClawsProps = typeof __propDef.props;
export type GiFlameClawsEvents = typeof __propDef.events;
export type GiFlameClawsSlots = typeof __propDef.slots;
export default class GiFlameClaws extends SvelteComponentTyped<GiFlameClawsProps, GiFlameClawsEvents, GiFlameClawsSlots> {
}
export {};
