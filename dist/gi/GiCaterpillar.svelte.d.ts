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
export type GiCaterpillarProps = typeof __propDef.props;
export type GiCaterpillarEvents = typeof __propDef.events;
export type GiCaterpillarSlots = typeof __propDef.slots;
export default class GiCaterpillar extends SvelteComponentTyped<GiCaterpillarProps, GiCaterpillarEvents, GiCaterpillarSlots> {
}
export {};
