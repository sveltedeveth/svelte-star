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
export type GiSpinningSwordProps = typeof __propDef.props;
export type GiSpinningSwordEvents = typeof __propDef.events;
export type GiSpinningSwordSlots = typeof __propDef.slots;
export default class GiSpinningSword extends SvelteComponentTyped<GiSpinningSwordProps, GiSpinningSwordEvents, GiSpinningSwordSlots> {
}
export {};
