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
export type GiArcingBoltProps = typeof __propDef.props;
export type GiArcingBoltEvents = typeof __propDef.events;
export type GiArcingBoltSlots = typeof __propDef.slots;
export default class GiArcingBolt extends SvelteComponentTyped<GiArcingBoltProps, GiArcingBoltEvents, GiArcingBoltSlots> {
}
export {};
