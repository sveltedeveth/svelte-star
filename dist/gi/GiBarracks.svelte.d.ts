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
export type GiBarracksProps = typeof __propDef.props;
export type GiBarracksEvents = typeof __propDef.events;
export type GiBarracksSlots = typeof __propDef.slots;
export default class GiBarracks extends SvelteComponentTyped<GiBarracksProps, GiBarracksEvents, GiBarracksSlots> {
}
export {};
