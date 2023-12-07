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
export type GiZeppelinProps = typeof __propDef.props;
export type GiZeppelinEvents = typeof __propDef.events;
export type GiZeppelinSlots = typeof __propDef.slots;
export default class GiZeppelin extends SvelteComponentTyped<GiZeppelinProps, GiZeppelinEvents, GiZeppelinSlots> {
}
export {};
