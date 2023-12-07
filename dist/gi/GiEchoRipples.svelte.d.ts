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
export type GiEchoRipplesProps = typeof __propDef.props;
export type GiEchoRipplesEvents = typeof __propDef.events;
export type GiEchoRipplesSlots = typeof __propDef.slots;
export default class GiEchoRipples extends SvelteComponentTyped<GiEchoRipplesProps, GiEchoRipplesEvents, GiEchoRipplesSlots> {
}
export {};
