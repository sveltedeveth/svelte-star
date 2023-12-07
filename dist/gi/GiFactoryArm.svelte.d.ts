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
export type GiFactoryArmProps = typeof __propDef.props;
export type GiFactoryArmEvents = typeof __propDef.events;
export type GiFactoryArmSlots = typeof __propDef.slots;
export default class GiFactoryArm extends SvelteComponentTyped<GiFactoryArmProps, GiFactoryArmEvents, GiFactoryArmSlots> {
}
export {};
