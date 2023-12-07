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
export type GiCaesarProps = typeof __propDef.props;
export type GiCaesarEvents = typeof __propDef.events;
export type GiCaesarSlots = typeof __propDef.slots;
export default class GiCaesar extends SvelteComponentTyped<GiCaesarProps, GiCaesarEvents, GiCaesarSlots> {
}
export {};
