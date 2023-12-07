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
export type FaHubspotProps = typeof __propDef.props;
export type FaHubspotEvents = typeof __propDef.events;
export type FaHubspotSlots = typeof __propDef.slots;
export default class FaHubspot extends SvelteComponentTyped<FaHubspotProps, FaHubspotEvents, FaHubspotSlots> {
}
export {};
