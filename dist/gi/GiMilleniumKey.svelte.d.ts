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
export type GiMilleniumKeyProps = typeof __propDef.props;
export type GiMilleniumKeyEvents = typeof __propDef.events;
export type GiMilleniumKeySlots = typeof __propDef.slots;
export default class GiMilleniumKey extends SvelteComponentTyped<GiMilleniumKeyProps, GiMilleniumKeyEvents, GiMilleniumKeySlots> {
}
export {};
