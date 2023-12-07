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
export type GiShotgunProps = typeof __propDef.props;
export type GiShotgunEvents = typeof __propDef.events;
export type GiShotgunSlots = typeof __propDef.slots;
export default class GiShotgun extends SvelteComponentTyped<GiShotgunProps, GiShotgunEvents, GiShotgunSlots> {
}
export {};
