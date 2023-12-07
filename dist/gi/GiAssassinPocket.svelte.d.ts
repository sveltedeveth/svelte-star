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
export type GiAssassinPocketProps = typeof __propDef.props;
export type GiAssassinPocketEvents = typeof __propDef.events;
export type GiAssassinPocketSlots = typeof __propDef.slots;
export default class GiAssassinPocket extends SvelteComponentTyped<GiAssassinPocketProps, GiAssassinPocketEvents, GiAssassinPocketSlots> {
}
export {};
