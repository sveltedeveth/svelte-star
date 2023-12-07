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
export type GiWarPickProps = typeof __propDef.props;
export type GiWarPickEvents = typeof __propDef.events;
export type GiWarPickSlots = typeof __propDef.slots;
export default class GiWarPick extends SvelteComponentTyped<GiWarPickProps, GiWarPickEvents, GiWarPickSlots> {
}
export {};
