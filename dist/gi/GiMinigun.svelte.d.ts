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
export type GiMinigunProps = typeof __propDef.props;
export type GiMinigunEvents = typeof __propDef.events;
export type GiMinigunSlots = typeof __propDef.slots;
export default class GiMinigun extends SvelteComponentTyped<GiMinigunProps, GiMinigunEvents, GiMinigunSlots> {
}
export {};
