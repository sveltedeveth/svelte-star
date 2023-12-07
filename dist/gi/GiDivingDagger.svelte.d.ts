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
export type GiDivingDaggerProps = typeof __propDef.props;
export type GiDivingDaggerEvents = typeof __propDef.events;
export type GiDivingDaggerSlots = typeof __propDef.slots;
export default class GiDivingDagger extends SvelteComponentTyped<GiDivingDaggerProps, GiDivingDaggerEvents, GiDivingDaggerSlots> {
}
export {};
