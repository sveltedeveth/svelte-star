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
export type GoBoldProps = typeof __propDef.props;
export type GoBoldEvents = typeof __propDef.events;
export type GoBoldSlots = typeof __propDef.slots;
export default class GoBold extends SvelteComponentTyped<GoBoldProps, GoBoldEvents, GoBoldSlots> {
}
export {};
