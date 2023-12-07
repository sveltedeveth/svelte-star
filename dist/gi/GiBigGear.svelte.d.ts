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
export type GiBigGearProps = typeof __propDef.props;
export type GiBigGearEvents = typeof __propDef.events;
export type GiBigGearSlots = typeof __propDef.slots;
export default class GiBigGear extends SvelteComponentTyped<GiBigGearProps, GiBigGearEvents, GiBigGearSlots> {
}
export {};
