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
export type GiMechanicalArmProps = typeof __propDef.props;
export type GiMechanicalArmEvents = typeof __propDef.events;
export type GiMechanicalArmSlots = typeof __propDef.slots;
export default class GiMechanicalArm extends SvelteComponentTyped<GiMechanicalArmProps, GiMechanicalArmEvents, GiMechanicalArmSlots> {
}
export {};
