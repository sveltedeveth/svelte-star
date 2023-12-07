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
export type GiLadybugProps = typeof __propDef.props;
export type GiLadybugEvents = typeof __propDef.events;
export type GiLadybugSlots = typeof __propDef.slots;
export default class GiLadybug extends SvelteComponentTyped<GiLadybugProps, GiLadybugEvents, GiLadybugSlots> {
}
export {};
