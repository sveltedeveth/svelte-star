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
export type GiFlyingShurikenProps = typeof __propDef.props;
export type GiFlyingShurikenEvents = typeof __propDef.events;
export type GiFlyingShurikenSlots = typeof __propDef.slots;
export default class GiFlyingShuriken extends SvelteComponentTyped<GiFlyingShurikenProps, GiFlyingShurikenEvents, GiFlyingShurikenSlots> {
}
export {};
