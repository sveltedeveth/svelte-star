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
export type IoIosLinkProps = typeof __propDef.props;
export type IoIosLinkEvents = typeof __propDef.events;
export type IoIosLinkSlots = typeof __propDef.slots;
export default class IoIosLink extends SvelteComponentTyped<IoIosLinkProps, IoIosLinkEvents, IoIosLinkSlots> {
}
export {};
