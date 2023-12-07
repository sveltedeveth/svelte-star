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
export type GiBandageRollProps = typeof __propDef.props;
export type GiBandageRollEvents = typeof __propDef.events;
export type GiBandageRollSlots = typeof __propDef.slots;
export default class GiBandageRoll extends SvelteComponentTyped<GiBandageRollProps, GiBandageRollEvents, GiBandageRollSlots> {
}
export {};
