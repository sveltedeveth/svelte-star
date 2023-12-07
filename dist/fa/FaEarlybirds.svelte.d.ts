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
export type FaEarlybirdsProps = typeof __propDef.props;
export type FaEarlybirdsEvents = typeof __propDef.events;
export type FaEarlybirdsSlots = typeof __propDef.slots;
export default class FaEarlybirds extends SvelteComponentTyped<FaEarlybirdsProps, FaEarlybirdsEvents, FaEarlybirdsSlots> {
}
export {};
