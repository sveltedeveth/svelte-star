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
export type GiEarthSpitProps = typeof __propDef.props;
export type GiEarthSpitEvents = typeof __propDef.events;
export type GiEarthSpitSlots = typeof __propDef.slots;
export default class GiEarthSpit extends SvelteComponentTyped<GiEarthSpitProps, GiEarthSpitEvents, GiEarthSpitSlots> {
}
export {};
