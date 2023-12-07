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
export type GiBootsProps = typeof __propDef.props;
export type GiBootsEvents = typeof __propDef.events;
export type GiBootsSlots = typeof __propDef.slots;
export default class GiBoots extends SvelteComponentTyped<GiBootsProps, GiBootsEvents, GiBootsSlots> {
}
export {};
