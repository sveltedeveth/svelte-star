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
export type GiAmmoniteProps = typeof __propDef.props;
export type GiAmmoniteEvents = typeof __propDef.events;
export type GiAmmoniteSlots = typeof __propDef.slots;
export default class GiAmmonite extends SvelteComponentTyped<GiAmmoniteProps, GiAmmoniteEvents, GiAmmoniteSlots> {
}
export {};
