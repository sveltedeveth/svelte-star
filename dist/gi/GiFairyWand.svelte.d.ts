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
export type GiFairyWandProps = typeof __propDef.props;
export type GiFairyWandEvents = typeof __propDef.events;
export type GiFairyWandSlots = typeof __propDef.slots;
export default class GiFairyWand extends SvelteComponentTyped<GiFairyWandProps, GiFairyWandEvents, GiFairyWandSlots> {
}
export {};
