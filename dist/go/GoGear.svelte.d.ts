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
export type GoGearProps = typeof __propDef.props;
export type GoGearEvents = typeof __propDef.events;
export type GoGearSlots = typeof __propDef.slots;
export default class GoGear extends SvelteComponentTyped<GoGearProps, GoGearEvents, GoGearSlots> {
}
export {};
