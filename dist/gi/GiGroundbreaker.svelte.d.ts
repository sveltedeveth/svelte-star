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
export type GiGroundbreakerProps = typeof __propDef.props;
export type GiGroundbreakerEvents = typeof __propDef.events;
export type GiGroundbreakerSlots = typeof __propDef.slots;
export default class GiGroundbreaker extends SvelteComponentTyped<GiGroundbreakerProps, GiGroundbreakerEvents, GiGroundbreakerSlots> {
}
export {};
