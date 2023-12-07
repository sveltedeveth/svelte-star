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
export type WiUmbrellaProps = typeof __propDef.props;
export type WiUmbrellaEvents = typeof __propDef.events;
export type WiUmbrellaSlots = typeof __propDef.slots;
export default class WiUmbrella extends SvelteComponentTyped<WiUmbrellaProps, WiUmbrellaEvents, WiUmbrellaSlots> {
}
export {};
