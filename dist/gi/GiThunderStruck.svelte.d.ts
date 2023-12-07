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
export type GiThunderStruckProps = typeof __propDef.props;
export type GiThunderStruckEvents = typeof __propDef.events;
export type GiThunderStruckSlots = typeof __propDef.slots;
export default class GiThunderStruck extends SvelteComponentTyped<GiThunderStruckProps, GiThunderStruckEvents, GiThunderStruckSlots> {
}
export {};
