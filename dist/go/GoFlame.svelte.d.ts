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
export type GoFlameProps = typeof __propDef.props;
export type GoFlameEvents = typeof __propDef.events;
export type GoFlameSlots = typeof __propDef.slots;
export default class GoFlame extends SvelteComponentTyped<GoFlameProps, GoFlameEvents, GoFlameSlots> {
}
export {};
