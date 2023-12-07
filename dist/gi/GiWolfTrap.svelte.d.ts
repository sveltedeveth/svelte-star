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
export type GiWolfTrapProps = typeof __propDef.props;
export type GiWolfTrapEvents = typeof __propDef.events;
export type GiWolfTrapSlots = typeof __propDef.slots;
export default class GiWolfTrap extends SvelteComponentTyped<GiWolfTrapProps, GiWolfTrapEvents, GiWolfTrapSlots> {
}
export {};
