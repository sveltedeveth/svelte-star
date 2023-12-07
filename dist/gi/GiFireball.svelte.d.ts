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
export type GiFireballProps = typeof __propDef.props;
export type GiFireballEvents = typeof __propDef.events;
export type GiFireballSlots = typeof __propDef.slots;
export default class GiFireball extends SvelteComponentTyped<GiFireballProps, GiFireballEvents, GiFireballSlots> {
}
export {};
