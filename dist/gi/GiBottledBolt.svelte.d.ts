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
export type GiBottledBoltProps = typeof __propDef.props;
export type GiBottledBoltEvents = typeof __propDef.events;
export type GiBottledBoltSlots = typeof __propDef.slots;
export default class GiBottledBolt extends SvelteComponentTyped<GiBottledBoltProps, GiBottledBoltEvents, GiBottledBoltSlots> {
}
export {};
