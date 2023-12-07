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
export type GiGunshotProps = typeof __propDef.props;
export type GiGunshotEvents = typeof __propDef.events;
export type GiGunshotSlots = typeof __propDef.slots;
export default class GiGunshot extends SvelteComponentTyped<GiGunshotProps, GiGunshotEvents, GiGunshotSlots> {
}
export {};
