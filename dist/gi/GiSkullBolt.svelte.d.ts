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
export type GiSkullBoltProps = typeof __propDef.props;
export type GiSkullBoltEvents = typeof __propDef.events;
export type GiSkullBoltSlots = typeof __propDef.slots;
export default class GiSkullBolt extends SvelteComponentTyped<GiSkullBoltProps, GiSkullBoltEvents, GiSkullBoltSlots> {
}
export {};
